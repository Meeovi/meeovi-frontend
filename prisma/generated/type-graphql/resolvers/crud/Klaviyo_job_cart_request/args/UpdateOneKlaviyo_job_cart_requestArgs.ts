import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_cart_requestUpdateInput } from "../../../inputs/Klaviyo_job_cart_requestUpdateInput";
import { Klaviyo_job_cart_requestWhereUniqueInput } from "../../../inputs/Klaviyo_job_cart_requestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneKlaviyo_job_cart_requestArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestUpdateInput, {
    nullable: false
  })
  data!: Klaviyo_job_cart_requestUpdateInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_job_cart_requestWhereUniqueInput;
}
