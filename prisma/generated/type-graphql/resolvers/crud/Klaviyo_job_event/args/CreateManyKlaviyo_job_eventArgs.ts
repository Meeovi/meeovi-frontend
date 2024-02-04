import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_eventCreateManyInput } from "../../../inputs/Klaviyo_job_eventCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyKlaviyo_job_eventArgs {
  @TypeGraphQL.Field(_type => [Klaviyo_job_eventCreateManyInput], {
    nullable: false
  })
  data!: Klaviyo_job_eventCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
