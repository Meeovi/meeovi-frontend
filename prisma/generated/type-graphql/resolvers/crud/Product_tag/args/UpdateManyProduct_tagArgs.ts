import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_tagUpdateManyMutationInput } from "../../../inputs/Product_tagUpdateManyMutationInput";
import { Product_tagWhereInput } from "../../../inputs/Product_tagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_tagArgs {
  @TypeGraphQL.Field(_type => Product_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_tagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_tagWhereInput, {
    nullable: true
  })
  where?: Product_tagWhereInput | undefined;
}
