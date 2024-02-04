import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_selling_translationCreateManyInput } from "../../../inputs/Product_cross_selling_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_cross_selling_translationArgs {
  @TypeGraphQL.Field(_type => [Product_cross_selling_translationCreateManyInput], {
    nullable: false
  })
  data!: Product_cross_selling_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
