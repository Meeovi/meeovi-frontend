import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sortingWhereInput } from "../../../inputs/Product_sortingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_sortingArgs {
  @TypeGraphQL.Field(_type => Product_sortingWhereInput, {
    nullable: true
  })
  where?: Product_sortingWhereInput | undefined;
}
