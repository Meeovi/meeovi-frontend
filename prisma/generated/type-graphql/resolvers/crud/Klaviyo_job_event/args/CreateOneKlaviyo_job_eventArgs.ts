import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_eventCreateInput } from "../../../inputs/Klaviyo_job_eventCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneKlaviyo_job_eventArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventCreateInput, {
    nullable: false
  })
  data!: Klaviyo_job_eventCreateInput;
}
