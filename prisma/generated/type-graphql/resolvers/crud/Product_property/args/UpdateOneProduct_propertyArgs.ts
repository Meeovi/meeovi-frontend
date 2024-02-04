import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_propertyUpdateInput } from "../../../inputs/Product_propertyUpdateInput";
import { Product_propertyWhereUniqueInput } from "../../../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_propertyArgs {
  @TypeGraphQL.Field(_type => Product_propertyUpdateInput, {
    nullable: false
  })
  data!: Product_propertyUpdateInput;

  @TypeGraphQL.Field(_type => Product_propertyWhereUniqueInput, {
    nullable: false
  })
  where!: Product_propertyWhereUniqueInput;
}
