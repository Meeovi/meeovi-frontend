import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCreateManyUserInput } from "../inputs/Acl_user_roleCreateManyUserInput";

@TypeGraphQL.InputType("Acl_user_roleCreateManyUserInputEnvelope", {})
export class Acl_user_roleCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [Acl_user_roleCreateManyUserInput], {
    nullable: false
  })
  data!: Acl_user_roleCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
