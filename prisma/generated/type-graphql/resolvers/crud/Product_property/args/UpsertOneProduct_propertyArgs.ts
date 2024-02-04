import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_propertyCreateInput } from "../../../inputs/Product_propertyCreateInput";
import { Product_propertyUpdateInput } from "../../../inputs/Product_propertyUpdateInput";
import { Product_propertyWhereUniqueInput } from "../../../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_propertyArgs {
  @TypeGraphQL.Field(_type => Product_propertyWhereUniqueInput, {
    nullable: false
  })
  where!: Product_propertyWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_propertyCreateInput, {
    nullable: false
  })
  create!: Product_propertyCreateInput;

  @TypeGraphQL.Field(_type => Product_propertyUpdateInput, {
    nullable: false
  })
  update!: Product_propertyUpdateInput;
}
