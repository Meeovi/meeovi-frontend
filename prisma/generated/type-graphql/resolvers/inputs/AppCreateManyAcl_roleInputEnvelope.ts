import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateManyAcl_roleInput } from "../inputs/AppCreateManyAcl_roleInput";

@TypeGraphQL.InputType("AppCreateManyAcl_roleInputEnvelope", {})
export class AppCreateManyAcl_roleInputEnvelope {
  @TypeGraphQL.Field(_type => [AppCreateManyAcl_roleInput], {
    nullable: false
  })
  data!: AppCreateManyAcl_roleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
