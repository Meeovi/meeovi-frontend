import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCreateManyAcl_roleInput } from "../inputs/Acl_user_roleCreateManyAcl_roleInput";

@TypeGraphQL.InputType("Acl_user_roleCreateManyAcl_roleInputEnvelope", {})
export class Acl_user_roleCreateManyAcl_roleInputEnvelope {
  @TypeGraphQL.Field(_type => [Acl_user_roleCreateManyAcl_roleInput], {
    nullable: false
  })
  data!: Acl_user_roleCreateManyAcl_roleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
