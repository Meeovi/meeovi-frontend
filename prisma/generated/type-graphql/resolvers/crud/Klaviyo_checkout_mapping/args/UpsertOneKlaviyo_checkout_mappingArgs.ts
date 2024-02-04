import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_checkout_mappingCreateInput } from "../../../inputs/Klaviyo_checkout_mappingCreateInput";
import { Klaviyo_checkout_mappingUpdateInput } from "../../../inputs/Klaviyo_checkout_mappingUpdateInput";
import { Klaviyo_checkout_mappingWhereUniqueInput } from "../../../inputs/Klaviyo_checkout_mappingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneKlaviyo_checkout_mappingArgs {
  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_checkout_mappingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingCreateInput, {
    nullable: false
  })
  create!: Klaviyo_checkout_mappingCreateInput;

  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingUpdateInput, {
    nullable: false
  })
  update!: Klaviyo_checkout_mappingUpdateInput;
}
