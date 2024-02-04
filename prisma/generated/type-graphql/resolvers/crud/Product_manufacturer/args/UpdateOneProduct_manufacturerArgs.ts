import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturerUpdateInput } from "../../../inputs/Product_manufacturerUpdateInput";
import { Product_manufacturerWhereUniqueInput } from "../../../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_manufacturerArgs {
  @TypeGraphQL.Field(_type => Product_manufacturerUpdateInput, {
    nullable: false
  })
  data!: Product_manufacturerUpdateInput;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturerWhereUniqueInput;
}
