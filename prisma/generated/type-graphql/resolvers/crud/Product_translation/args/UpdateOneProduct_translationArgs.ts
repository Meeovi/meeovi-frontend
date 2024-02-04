import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_translationUpdateInput } from "../../../inputs/Product_translationUpdateInput";
import { Product_translationWhereUniqueInput } from "../../../inputs/Product_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_translationArgs {
  @TypeGraphQL.Field(_type => Product_translationUpdateInput, {
    nullable: false
  })
  data!: Product_translationUpdateInput;

  @TypeGraphQL.Field(_type => Product_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_translationWhereUniqueInput;
}
