import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_translationWhereInput } from "../../../inputs/Product_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_translationArgs {
  @TypeGraphQL.Field(_type => Product_translationWhereInput, {
    nullable: true
  })
  where?: Product_translationWhereInput | undefined;
}
