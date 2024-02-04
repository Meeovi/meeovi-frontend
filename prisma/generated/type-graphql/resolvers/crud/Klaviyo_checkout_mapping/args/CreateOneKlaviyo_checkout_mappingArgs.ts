import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_checkout_mappingCreateInput } from "../../../inputs/Klaviyo_checkout_mappingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneKlaviyo_checkout_mappingArgs {
  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingCreateInput, {
    nullable: false
  })
  data!: Klaviyo_checkout_mappingCreateInput;
}
