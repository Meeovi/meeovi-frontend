import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_categoryWhereInput } from "../../../inputs/Product_categoryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_categoryArgs {
  @TypeGraphQL.Field(_type => Product_categoryWhereInput, {
    nullable: true
  })
  where?: Product_categoryWhereInput | undefined;
}
