import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturer_translationWhereInput } from "../../../inputs/Product_manufacturer_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_manufacturer_translationArgs {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereInput, {
    nullable: true
  })
  where?: Product_manufacturer_translationWhereInput | undefined;
}
