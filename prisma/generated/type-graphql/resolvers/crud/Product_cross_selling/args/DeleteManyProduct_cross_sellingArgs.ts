import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_sellingWhereInput } from "../../../inputs/Product_cross_sellingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_cross_sellingArgs {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  where?: Product_cross_sellingWhereInput | undefined;
}
