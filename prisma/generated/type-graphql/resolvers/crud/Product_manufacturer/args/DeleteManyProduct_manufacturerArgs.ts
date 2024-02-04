import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturerWhereInput } from "../../../inputs/Product_manufacturerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_manufacturerArgs {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  where?: Product_manufacturerWhereInput | undefined;
}
