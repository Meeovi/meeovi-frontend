import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_categoryUpdateManyMutationInput } from "../../../inputs/Product_categoryUpdateManyMutationInput";
import { Product_categoryWhereInput } from "../../../inputs/Product_categoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_categoryArgs {
  @TypeGraphQL.Field(_type => Product_categoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_categoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_categoryWhereInput, {
    nullable: true
  })
  where?: Product_categoryWhereInput | undefined;
}
