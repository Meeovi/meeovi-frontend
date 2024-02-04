import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_type_translationUpdateInput } from "../../../inputs/Sales_channel_type_translationUpdateInput";
import { Sales_channel_type_translationWhereUniqueInput } from "../../../inputs/Sales_channel_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSales_channel_type_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_type_translationUpdateInput, {
    nullable: false
  })
  data!: Sales_channel_type_translationUpdateInput;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_type_translationWhereUniqueInput;
}
