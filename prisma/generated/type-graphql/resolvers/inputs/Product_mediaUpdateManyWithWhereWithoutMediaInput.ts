import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaScalarWhereInput } from "../inputs/Product_mediaScalarWhereInput";
import { Product_mediaUpdateManyMutationInput } from "../inputs/Product_mediaUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_mediaUpdateManyWithWhereWithoutMediaInput", {})
export class Product_mediaUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Product_mediaScalarWhereInput, {
    nullable: false
  })
  where!: Product_mediaScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_mediaUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_mediaUpdateManyMutationInput;
}
