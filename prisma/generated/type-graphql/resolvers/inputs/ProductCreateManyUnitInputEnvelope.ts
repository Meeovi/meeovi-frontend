import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyUnitInput } from "../inputs/ProductCreateManyUnitInput";

@TypeGraphQL.InputType("ProductCreateManyUnitInputEnvelope", {})
export class ProductCreateManyUnitInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyUnitInput], {
    nullable: false
  })
  data!: ProductCreateManyUnitInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
