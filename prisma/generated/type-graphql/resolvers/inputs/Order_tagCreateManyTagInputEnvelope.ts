import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCreateManyTagInput } from "../inputs/Order_tagCreateManyTagInput";

@TypeGraphQL.InputType("Order_tagCreateManyTagInputEnvelope", {})
export class Order_tagCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_tagCreateManyTagInput], {
    nullable: false
  })
  data!: Order_tagCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
