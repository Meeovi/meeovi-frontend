import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Media_tagScalarWhereInput", {})
export class Media_tagScalarWhereInput {
  @TypeGraphQL.Field(_type => [Media_tagScalarWhereInput], {
    nullable: true
  })
  AND?: Media_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagScalarWhereInput], {
    nullable: true
  })
  OR?: Media_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagScalarWhereInput], {
    nullable: true
  })
  NOT?: Media_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;
}
