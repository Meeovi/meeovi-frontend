import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyCountryInput } from "../inputs/CartCreateManyCountryInput";

@TypeGraphQL.InputType("CartCreateManyCountryInputEnvelope", {})
export class CartCreateManyCountryInputEnvelope {
  @TypeGraphQL.Field(_type => [CartCreateManyCountryInput], {
    nullable: false
  })
  data!: CartCreateManyCountryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
