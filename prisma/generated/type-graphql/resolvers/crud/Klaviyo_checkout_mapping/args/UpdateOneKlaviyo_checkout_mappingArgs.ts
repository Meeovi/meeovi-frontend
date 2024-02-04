import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_checkout_mappingUpdateInput } from "../../../inputs/Klaviyo_checkout_mappingUpdateInput";
import { Klaviyo_checkout_mappingWhereUniqueInput } from "../../../inputs/Klaviyo_checkout_mappingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneKlaviyo_checkout_mappingArgs {
  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingUpdateInput, {
    nullable: false
  })
  data!: Klaviyo_checkout_mappingUpdateInput;

  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_checkout_mappingWhereUniqueInput;
}
