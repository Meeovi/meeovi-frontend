import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturerWhereUniqueInput } from "../../../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProduct_manufacturerArgs {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturerWhereUniqueInput;
}
