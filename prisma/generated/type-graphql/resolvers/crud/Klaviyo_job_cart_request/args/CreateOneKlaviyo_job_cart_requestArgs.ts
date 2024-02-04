import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_cart_requestCreateInput } from "../../../inputs/Klaviyo_job_cart_requestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneKlaviyo_job_cart_requestArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestCreateInput, {
    nullable: false
  })
  data!: Klaviyo_job_cart_requestCreateInput;
}
