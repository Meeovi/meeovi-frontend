import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturer_translationUpdateManyMutationInput } from "../../../inputs/Product_manufacturer_translationUpdateManyMutationInput";
import { Product_manufacturer_translationWhereInput } from "../../../inputs/Product_manufacturer_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_manufacturer_translationArgs {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_manufacturer_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereInput, {
    nullable: true
  })
  where?: Product_manufacturer_translationWhereInput | undefined;
}
