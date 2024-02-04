import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturerCreateInput } from "../../../inputs/Product_manufacturerCreateInput";
import { Product_manufacturerUpdateInput } from "../../../inputs/Product_manufacturerUpdateInput";
import { Product_manufacturerWhereUniqueInput } from "../../../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_manufacturerArgs {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateInput, {
    nullable: false
  })
  create!: Product_manufacturerCreateInput;

  @TypeGraphQL.Field(_type => Product_manufacturerUpdateInput, {
    nullable: false
  })
  update!: Product_manufacturerUpdateInput;
}
