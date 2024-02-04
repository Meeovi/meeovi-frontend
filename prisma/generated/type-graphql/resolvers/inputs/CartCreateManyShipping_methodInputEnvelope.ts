import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyShipping_methodInput } from "../inputs/CartCreateManyShipping_methodInput";

@TypeGraphQL.InputType("CartCreateManyShipping_methodInputEnvelope", {})
export class CartCreateManyShipping_methodInputEnvelope {
  @TypeGraphQL.Field(_type => [CartCreateManyShipping_methodInput], {
    nullable: false
  })
  data!: CartCreateManyShipping_methodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
