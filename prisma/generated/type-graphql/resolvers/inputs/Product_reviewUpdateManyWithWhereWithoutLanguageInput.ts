import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewScalarWhereInput } from "../inputs/Product_reviewScalarWhereInput";
import { Product_reviewUpdateManyMutationInput } from "../inputs/Product_reviewUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_reviewUpdateManyWithWhereWithoutLanguageInput", {})
export class Product_reviewUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Product_reviewScalarWhereInput, {
    nullable: false
  })
  where!: Product_reviewScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_reviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_reviewUpdateManyMutationInput;
}
