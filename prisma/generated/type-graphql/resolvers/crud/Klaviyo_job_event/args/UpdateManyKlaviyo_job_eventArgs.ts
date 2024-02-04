import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_eventUpdateManyMutationInput } from "../../../inputs/Klaviyo_job_eventUpdateManyMutationInput";
import { Klaviyo_job_eventWhereInput } from "../../../inputs/Klaviyo_job_eventWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyKlaviyo_job_eventArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventUpdateManyMutationInput, {
    nullable: false
  })
  data!: Klaviyo_job_eventUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereInput, {
    nullable: true
  })
  where?: Klaviyo_job_eventWhereInput | undefined;
}
