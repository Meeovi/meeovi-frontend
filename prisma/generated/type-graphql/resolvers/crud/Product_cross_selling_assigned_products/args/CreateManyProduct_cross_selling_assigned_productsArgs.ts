import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_assigned_productsCreateManyInput } from "../../../inputs/Product_cross_selling_assigned_productsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_cross_selling_assigned_productsArgs {
  @TypeGraphQL.Field(_type => [Product_cross_selling_assigned_productsCreateManyInput], {
    nullable: false
  })
  data!: Product_cross_selling_assigned_productsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
