import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_cart_requestUpdateManyMutationInput } from "../../../inputs/Klaviyo_job_cart_requestUpdateManyMutationInput";
import { Klaviyo_job_cart_requestWhereInput } from "../../../inputs/Klaviyo_job_cart_requestWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyKlaviyo_job_cart_requestArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestUpdateManyMutationInput, {
    nullable: false
  })
  data!: Klaviyo_job_cart_requestUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_cart_requestWhereInput, {
    nullable: true
  })
  where?: Klaviyo_job_cart_requestWhereInput | undefined;
}
