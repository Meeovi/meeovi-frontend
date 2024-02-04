import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("custom_field_set_relationSet_idEntity_nameCompoundUniqueInput", {})
export class custom_field_set_relationSet_idEntity_nameCompoundUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  set_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity_name!: string;
}
