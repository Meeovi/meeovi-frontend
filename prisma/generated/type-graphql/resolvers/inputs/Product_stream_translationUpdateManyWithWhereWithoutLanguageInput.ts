import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationScalarWhereInput } from "../inputs/Product_stream_translationScalarWhereInput";
import { Product_stream_translationUpdateManyMutationInput } from "../inputs/Product_stream_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_stream_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Product_stream_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_stream_translationScalarWhereInput, {
    nullable: false
  })
  where!: Product_stream_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_stream_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_stream_translationUpdateManyMutationInput;
}
