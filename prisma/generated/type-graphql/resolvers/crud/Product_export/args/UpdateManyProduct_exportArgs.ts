import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportUpdateManyMutationInput } from "../../../inputs/Product_exportUpdateManyMutationInput";
import { Product_exportWhereInput } from "../../../inputs/Product_exportWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_exportArgs {
  @TypeGraphQL.Field(_type => Product_exportUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_exportUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_exportWhereInput, {
    nullable: true
  })
  where?: Product_exportWhereInput | undefined;
}
