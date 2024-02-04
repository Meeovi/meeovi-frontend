import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_typeCreateInput } from "../../../inputs/Sales_channel_typeCreateInput";
import { Sales_channel_typeUpdateInput } from "../../../inputs/Sales_channel_typeUpdateInput";
import { Sales_channel_typeWhereUniqueInput } from "../../../inputs/Sales_channel_typeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSales_channel_typeArgs {
  @TypeGraphQL.Field(_type => Sales_channel_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sales_channel_typeCreateInput, {
    nullable: false
  })
  create!: Sales_channel_typeCreateInput;

  @TypeGraphQL.Field(_type => Sales_channel_typeUpdateInput, {
    nullable: false
  })
  update!: Sales_channel_typeUpdateInput;
}
