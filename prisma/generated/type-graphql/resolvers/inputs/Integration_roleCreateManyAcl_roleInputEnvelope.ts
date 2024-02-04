import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleCreateManyAcl_roleInput } from "../inputs/Integration_roleCreateManyAcl_roleInput";

@TypeGraphQL.InputType("Integration_roleCreateManyAcl_roleInputEnvelope", {})
export class Integration_roleCreateManyAcl_roleInputEnvelope {
  @TypeGraphQL.Field(_type => [Integration_roleCreateManyAcl_roleInput], {
    nullable: false
  })
  data!: Integration_roleCreateManyAcl_roleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
