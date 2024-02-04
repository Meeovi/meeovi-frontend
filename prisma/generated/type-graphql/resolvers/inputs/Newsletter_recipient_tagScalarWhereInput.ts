import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Newsletter_recipient_tagScalarWhereInput", {})
export class Newsletter_recipient_tagScalarWhereInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagScalarWhereInput], {
    nullable: true
  })
  AND?: Newsletter_recipient_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagScalarWhereInput], {
    nullable: true
  })
  OR?: Newsletter_recipient_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagScalarWhereInput], {
    nullable: true
  })
  NOT?: Newsletter_recipient_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  newsletter_recipient_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;
}
