pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                    git 'https://github.com/simoncobb1966/jenkinstest.git/'
                    ftpPublisher alwaysPublishFromMaster: true, masterNodeName: '', paramPublish: [parameterName: ""],continueOnError: false, failOnError: false, publishers: [
        [configName: 'HostPresto', transfers: [
            [asciiMode: false, cleanRemote: false, excludes: '', flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: "/public_html/jenkins", remoteDirectorySDF: false, removePrefix: '', sourceFiles: '**.exe, **.txt']
        ], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]
    ]
            }
        }
    }
}
