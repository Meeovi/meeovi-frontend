import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_translationUpdateInput } from "../../../inputs/Sales_channel_translationUpdateInput";
import { Sales_channel_translationWhereUniqueInput } from "../../../inputs/Sales_channel_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSales_channel_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_translationUpdateInput, {
    nullable: false
  })
  data!: Sales_channel_translationUpdateInput;

  @TypeGraphQL.Field(_type => Sales_channel_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_translationWhereUniqueInput;
}
