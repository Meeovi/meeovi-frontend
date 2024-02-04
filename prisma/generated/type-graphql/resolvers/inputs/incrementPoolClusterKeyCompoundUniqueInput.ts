import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("incrementPoolClusterKeyCompoundUniqueInput", {})
export class incrementPoolClusterKeyCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  pool!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cluster!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  key!: string;
}
