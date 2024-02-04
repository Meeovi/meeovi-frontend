import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_cart_requestCreateInput } from "../../../inputs/Klaviyo_job_cart_requestCreateInput";
import { Klaviyo_job_cart_requestUpdateInput } from "../../../inputs/Klaviyo_job_cart_requestUpdateInput";
import { Klaviyo_job_cart_requestWhereUniqueInput } from "../../../inputs/Klaviyo_job_cart_requestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneKlaviyo_job_cart_requestArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_job_cart_requestWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestCreateInput, {
    nullable: false
  })
  create!: Klaviyo_job_cart_requestCreateInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestUpdateInput, {
    nullable: false
  })
  update!: Klaviyo_job_cart_requestUpdateInput;
}
