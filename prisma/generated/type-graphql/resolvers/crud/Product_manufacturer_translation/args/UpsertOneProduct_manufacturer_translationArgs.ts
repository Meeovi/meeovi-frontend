import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturer_translationCreateInput } from "../../../inputs/Product_manufacturer_translationCreateInput";
import { Product_manufacturer_translationUpdateInput } from "../../../inputs/Product_manufacturer_translationUpdateInput";
import { Product_manufacturer_translationWhereUniqueInput } from "../../../inputs/Product_manufacturer_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_manufacturer_translationArgs {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturer_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateInput, {
    nullable: false
  })
  create!: Product_manufacturer_translationCreateInput;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationUpdateInput, {
    nullable: false
  })
  update!: Product_manufacturer_translationUpdateInput;
}
