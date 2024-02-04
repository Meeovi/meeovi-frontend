import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_optionUpdateManyMutationInput } from "../../../inputs/Product_optionUpdateManyMutationInput";
import { Product_optionWhereInput } from "../../../inputs/Product_optionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_optionArgs {
  @TypeGraphQL.Field(_type => Product_optionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_optionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_optionWhereInput, {
    nullable: true
  })
  where?: Product_optionWhereInput | undefined;
}
