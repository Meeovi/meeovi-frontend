import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("productProduct_numberVersion_idCompoundUniqueInput", {})
export class productProduct_numberVersion_idCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  product_number!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;
}
