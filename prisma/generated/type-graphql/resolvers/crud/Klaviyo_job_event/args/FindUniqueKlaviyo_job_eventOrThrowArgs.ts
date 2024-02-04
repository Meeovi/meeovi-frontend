import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_eventWhereUniqueInput } from "../../../inputs/Klaviyo_job_eventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueKlaviyo_job_eventOrThrowArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_job_eventWhereUniqueInput;
}
