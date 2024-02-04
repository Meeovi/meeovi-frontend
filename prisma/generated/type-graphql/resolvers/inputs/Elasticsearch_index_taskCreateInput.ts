import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Elasticsearch_index_taskCreateInput", {})
export class Elasticsearch_index_taskCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  index!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  alias!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  entity!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  doc_count!: number;
}
